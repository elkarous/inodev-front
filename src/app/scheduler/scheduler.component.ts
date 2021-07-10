import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {DayPilot, DayPilotNavigatorComponent, DayPilotSchedulerComponent} from 'daypilot-pro-angular';
import {DataService, EventCreateParams, EventDeleteParams, EventMoveParams} from '../services/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CondidatoffreService} from '../services/condidatoffre.service';
import {ToastrService} from 'ngx-toastr';
import {SignupServiceService} from '../services/signup-service.service';
@Component({
  selector: 'app-schedulercomponent',
  templateUrl: `./scheduler.component.html`,
})
export class SchedulerComponent implements AfterViewInit {

  @ViewChild('scheduler') scheduler: DayPilotSchedulerComponent;
  @ViewChild('navigator') navigator: DayPilotNavigatorComponent;

  events: any[] = [];

  expanded = true;

  heightModes: any[] = [
    {name: 'Fixed 100%', value: 'Parent100Pct'},
    {name: 'Max 100%', value: 'Max100Pct'},
  ];

  search = {
    text: '',
    lastIndex: -1,
    lastText: null,
    index: 0,
    total: 0,
    findRow: () => {
      const scheduler = this.scheduler.control;
      const search = this.search;

      if (search.lastText !== search.text) {
        search.lastIndex = -1;
        search.index = 0;
        scheduler.rows.selection.clear();
      }
      search.lastText = search.text;

      const criteria = (r) => r.name.toLowerCase().includes(search.text.toLowerCase());
      const all = scheduler.rows.all().filter(criteria);
      const row = scheduler.rows.find(criteria, search.lastIndex + 1);

      if (row) {
        search.index += 1;
        scheduler.rows.selection.clear();
        search.lastIndex = row.index;
        scheduler.rows.selection.add(row);

        if (!scheduler.getViewPort().resources.includes(row.id)) {
          scheduler.scrollToResource(row);
        }

      }
      search.total = all.length;
    },
    clear: () => {
      const scheduler = this.scheduler.control;
      const search = this.search;

      search.text = '';
      search.lastText = '';
      search.lastIndex = -1;
      search.index = 0;
      search.total = 0;

      scheduler.rows.selection.clear();
    }
  };

  navigatorConfig: DayPilot.NavigatorConfig = {
    showMonths: 2,
    skipMonths: 3,
    selectMode: 'Week',
    startDate: '2021-05-01',
    cellWidth: 30,
    cellHeight: 30,
    dayHeaderHeight: 40,
    titleHeight: 40
  };

  config: DayPilot.SchedulerConfig = {
    timeHeaders : [
      {groupBy: 'Month', format: 'MMMM yyyy'},
      {groupBy: 'Day', format: 'dddd d'},
      {
        groupBy: 'Cell',
        format: 'tt'
      }
    ],
    scale: 'CellDuration',
    cellDuration: 720,
    days: 7,
    eventHeight: 120,
    startDate: DayPilot.Date.today().firstDayOfWeek(),
    treeEnabled: true,
    eventResizingStartEndEnabled: true,
    heightSpec: 'Max100Pct',
    rowHeaderWidth: 170,
    cellWidth: 75,
    groupConcurrentEvents: true,
    eventClickHandling: 'Edit',
    eventDeleteHandling: 'Update',
    onEventDeleted(args) {
      this.message('Event deleted: ' + args.e.text());
    },
    eventHoverHandling: 'Bubble',
    bubble: new DayPilot.Bubble({
      onLoad(args) {
        // if event object doesn't specify "bubbleHtml" property
        // this onLoad handler will be called to provide the bubble HTML
        args.html = 'Event details';
      }
    }),
    rowHeaderHideIconEnabled: true,
    hideBorderFor100PctHeight: true,
    onEventDelete: args => {
      const params: EventDeleteParams = {
        id: args.e.id(),
      };
      this.ds.deleteEvent(params).subscribe(result => {
        this.scheduler.control.message('Event deleted');
      });

    },
    onTimeRangeSelected: args => {
      DayPilot.Modal.prompt('New event name:', 'Event').then(modal => {
        this.scheduler.control.clearSelection();
        if (!modal.result) {
          return;
        }

        const params: EventCreateParams = {
          start: args.start.toString(),
          end: args.end.toString(),
          text: modal.result,
          resource: args.resource,
          offre: this.id
        };
        this.ds.createEvent(params).subscribe(result => {
          this.events.push(result);
          this.scheduler.control.message('Event created');
        } );

      });
    },
    onEventMove: args => {
      const params: EventMoveParams = {
        id: args.e.id(),
        start: args.newStart.toString(),
        end: args.newEnd.toString(),
        resource: args.newResource,
        offre: this.id
      };
      this.ds.moveEvent(params).subscribe(result => {
        this.scheduler.control.message('Event moved');
      });

    }
  };
  public id: any;
  public con: any;
  public sup: any;
  public off: any;
  constructor(private route: Router, private ds: DataService,
              private sign: SignupServiceService, private toastr: ToastrService,
              private router: ActivatedRoute, private srv: CondidatoffreService) {}

  ngAfterViewInit(): void {
    this.id = this.router.snapshot.params.id;
    this.srv.calendar(this.id).subscribe(res => { this.con = res; console.log(res); });
    this.srv.calendar1(this.id).subscribe(res => this.sup = res);
    this.srv.calendar2(this.id).subscribe(res => {this.off = res; console.log(res); });
    console.log(this.off);
    this.navigator.control.select(this.config.startDate);
    this.ds.getResources().subscribe(result => this.config.resources = result);
    this.ds.getResources().subscribe(result => this.config.resources = result);
    const from = this.scheduler.control.visibleStart();
    const to = this.scheduler.control.visibleEnd();
    this.ds.getEvents(from, to, this.id).subscribe((result: any) => { result.json(); console.log(result); this.events = result; });
  }

  viewChange() {
    const from = this.scheduler.control.visibleStart();
    const to = this.scheduler.control.visibleEnd();
    this.ds.getEvents(from, to, this.id).subscribe(result => {
      this.events = result;
    });
  }

  dateChange() {
    this.config.startDate = this.navigator.control.selectionStart;
    this.config.days = new DayPilot.Duration(this.navigator.control.selectionStart, this.navigator.control.selectionEnd).totalDays() + 1;
  }
  previous(): void {
    this.toastr.info(' ' + this.con[0][2] + ' ' + this.con[0][3],
      'Condidat ', {
        timeOut: 3000,
        positionClass: 'toast-bottom-center'
      });
    this.route.navigateByUrl('/user/' + this.con[0][0] + '/' + this.con[0][1]);
  }

  today(): void {
    this.toastr.info('  ' + this.off[0] ,
      'Project ', {
        timeOut: 30000,
        positionClass: 'toast-top-center'
      });
  }

  next(): void {
    this.toastr.info( ' ' + this.sup[0][2] + ' ' + this.sup[0][3],
      'Supervisor ' , {
        timeOut: 3000,
        positionClass: 'toast-bottom-center'
      });
    this.route.navigateByUrl('/user/' + this.sup[0][0] + '/' + this.sup[0][1]);
  }
   sleep(ms) {
    const dt = new Date();
    while (Date.now() - dt.getTime() <= ms) {}
    return true;
  }
}

