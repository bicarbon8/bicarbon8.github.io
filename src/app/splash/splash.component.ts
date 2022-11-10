import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { ImageItem } from '../carousel/image-item';
import { ImageService } from '../carousel/image.service';
import { SplashService } from './splash.service';
import { SiteMap } from '../types/site-map';

@Component({
    selector: 'app-splash',
    templateUrl: './splash.component.html',
    styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit, OnDestroy {
    public refresh: boolean = true;
    public keepRunningGroupTitleUpdates = true;
    public width: number;
    public height: number;
    public imageUrl: string;
    public alt: string;
    public pageGroups: Array<string> = new Array<string>();
    public splashText: string;
    public splashSubtext: string;
    public technologies: Array<string>;

    private readonly viewportChange = this.viewportRuler
        .change(200)
        .subscribe(() => this.refresh && this.ngZone.run(() => this.setSize()));

    constructor(
        private readonly _imgSvc: ImageService,
        private readonly _splashSvc: SplashService,
        private readonly viewportRuler: ViewportRuler,
        private readonly ngZone: NgZone
    ) {
        this.splashText = `Jason's Dev Portfolio`;
        this.technologies = new Array<string>();
    }

    ngOnInit(): void {
        this.setSize();
        this._imgSvc.getImages(this.width, this.height, 1)
            .then((images: Array<ImageItem>) => {
                const img = images.find(i => i.url);
                if (img) {
                    this.imageUrl = img.download_url;
                    this.alt = (img.author) ? `Photographer: ${img.author}` : img.description;
                }
            });
        this._splashSvc.getSiteMap()
            .subscribe((smap: SiteMap) => {
                this.pageGroups = [...new Set(smap.pageGroups
                    .map(g => g.groupTitle))]
                this.splashSubtext = this.pageGroups.join(' | ');
                const techs = new Set<string>();
                smap.pageGroups
                    .forEach(g => g.pages
                        .forEach(p => p.technologies
                            .forEach(t => techs.add(t))));
                this.technologies = Array.from(techs.values());
            });
    }

    ngOnDestroy(): void {
        this.keepRunningGroupTitleUpdates = false;
    }

    private setSize() {
        const { width, height } = this.viewportRuler.getViewportSize();
        this.width = this.getDesiredWidth(width);
        this.height = this.getDesiredHeight(height);
    }

    private getDesiredWidth(viewWidth?: number): number {
        const width = (viewWidth ?? window.innerWidth) - 32;
        return width;
    }

    private getDesiredHeight(viewHeight?: number): number {
        const height = ((viewHeight ?? window.innerHeight) * 0.4).toFixed(0);
        return (+height < 300) ? 300 : +height;
    }

    private async updateGroupTitle(): Promise<void> {
        // for (var i=0; i<this.pageGroups.length; i++) {
        //     const title = this.pageGroups[i];
        //     for (var j=0; j<=title.length; j++) {
        //         this.currentGroupTitle = title.substring(0, j);
        //         await this.sleep(100);
        //     }
        //     await this.sleep(500);
        // }

        // const final = 'Me...';
        // for (var j=0; j<=final.length; j++) {
        //     this.currentGroupTitle = final.substring(0, j);
        //     await this.sleep(100);
        // }
    }

    private async sleep(ms: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}
