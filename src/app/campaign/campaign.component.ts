import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

import { Campaign } from '../models/campaign';

import { CampaignService } from '../services/campaign.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-campaigns',
  templateUrl: 'campaign.component.html',
  styleUrls: ['campaign.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CampaignComponent implements OnInit, OnDestroy {

  // Redux based variables
  campaigns: Observable<Array<Campaign>>;

  private subscription: Subscription;

  constructor(
    private campaignService: CampaignService
  ) {
    this.campaigns = campaignService.campaigns;
  }

  ngOnInit() {
    this.subscription = this.campaigns
      .subscribe(campaigns => {
        // Do something with campaigns
      }, error => {
        // Do something with error
      });

    this.campaignService.loadCampaigns();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  loadNew() {
    this.campaignService.loadCampaigns();
  }

}
