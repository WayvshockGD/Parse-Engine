declare function Engine(str: string, content: Engine.ContentArray): string;

declare namespace Engine {

    interface Content {
        variable: string;
        replace: any;
    }

    interface isCodes {
        str: boolean;
        msg: string;
    }

    type ContentArray = Array<Content>;
}

export = Engine;