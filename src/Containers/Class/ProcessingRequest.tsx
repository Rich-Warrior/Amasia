import { faceProduct, faceResponse, faceCategoriesList } from "../../Type/Interface";////

class ProcessingRequest {
    abortController: AbortController | null = null;
    headURL = "https://foo0022.firebaseio.com";
    newURL = "https://doo0022.firebaseio.com"

    async ServerRequest(endURL: string) {
        this.abortController = new AbortController();
        try {
            const Res = await fetch(`${endURL}`, { signal: this.abortController.signal });
            const Product = await Res.json();
            if (!Res.ok || !Product) {
                throw new Error("Page Not Found 404");
            }
            return Product;
        } catch (error) {
            return (error.name !== "AbortError") ? `${error.message}` : "AbortError";
        }
    }
    async SearchProdRequest(catgURL: string, Categories: string, SearchValue: string) {
        try {
            const objectResponse: faceResponse | faceCategoriesList | string = await this.ServerRequest(catgURL);
            if (typeof objectResponse === "string") { return objectResponse; }
            const arrayProduct: faceProduct[] = (Categories === ".json") ? Object.values(objectResponse)
                .map(v => Object.values(v).flat())
                .flat()
                .filter(({ title }) => title.includes(SearchValue))
                :
                Object.values(objectResponse)
                    .flat()
                    .filter(({ title }) => title.includes(SearchValue));
            return arrayProduct;
        } catch (error) {
            return `${error.message}`;
        }
    }
    Abort() {
        if (this.abortController !== null) { this.abortController.abort(); }
    }
}

export default new ProcessingRequest();