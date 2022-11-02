import { Component, OnInit } from '@angular/core';
import { SiteMap } from '../navigation/site-map';
import { CardData } from './card-data';
import { ProjectCardsService } from './project-cards.service';

@Component({
    selector: 'app-project-cards',
    templateUrl: './project-cards.component.html',
    styleUrls: ['./project-cards.component.css']
})
export class ProjectCardsComponent implements OnInit {
    public cardDataArray: Array<CardData>;
    public dataLoaded: boolean = false;

    constructor(private _cardsService: ProjectCardsService) { 
        this.cardDataArray = new Array<CardData>();
    }

    ngOnInit(): void {
        this._cardsService.getSiteMap()
            .subscribe((smap: SiteMap) => {
                const data = new Array<CardData>();
                for (var i=0; i<smap.pageGroups.length; i++) {
                    const g = smap.pageGroups[i];
                    for (var j=0; j<g.pages.length; j++) {
                        const p = g.pages[j];
                        const card: CardData = {
                            groupTitle: g.groupTitle,
                            title: p.title,
                            description: p.description,
                            url: p.url,
                            codeSourceUrl: p.codeSourceUrl,
                            featured: p.featured
                        };
                        data.push(card);
                    }
                }
                this.cardDataArray = [...data.filter(d => d.featured), ...data.filter(d => !d.featured)];
                this.dataLoaded = true;
            });
    }
}
