import { BrowserContext, Page, CDPSession } from "puppeteer";
import { Scraper } from "../Scraper";
import { IQuery } from "../query";

export interface IRunStrategyResult {
    exit: boolean;
}

export abstract class RunStrategy {
    protected scraper: Scraper;
    public session?: string;

    constructor(scraper: Scraper, session?: string) {
        this.scraper = scraper;
        this.session = session;
    }

    abstract run(
        browser: BrowserContext,
        page: Page,
        cdpSession: CDPSession,
        url: string,
        query: IQuery,
        location: string,
    ): Promise<IRunStrategyResult>;
}

export interface ILoadResult {
    success: boolean;
    error?: string | Error;
}
