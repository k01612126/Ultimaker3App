import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef} from '@angular/core';
import {Component} from '@angular/core';
import {SharedService} from '../../services/shared.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-responsive-sidenav',
  templateUrl: 'responsive-sidenav.component.html',
  styleUrls: ['responsive-sidenav.component.css']
})

export class ResponsiveSidenavComponent {

  mobileQuery: MediaQueryList;
  searchValue: string;
  private _mobileQueryListener: () => void;

  constructor(private router: Router, private sharedValue: SharedService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
