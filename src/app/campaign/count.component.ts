import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Campaign } from '../models/campaign';
import { CampaignService } from '../services/campaign.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'campaign-count',
  templateUrl: 'count.component.html'
})
export class CampaignCountComponent implements OnInit {

  // Redux based variables
  campaigns: Observable<Array<Campaign>>;

  constructor(
    private campaignService: CampaignService
  ) {
    this.campaigns = campaignService.campaigns;
  }


  ngOnInit() { }
}
