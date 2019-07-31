import { faceProduct } from "../../Type/Interface";

class ProcessingRequest {
    abortController: AbortController | null = null;
    headURL = "https://foo0022.firebaseio.com";

    async ServerRequest(endURL: string) {
        this.abortController = new AbortController();
        try {
            const Res = await fetch(`${this.headURL}${endURL}`, { signal: this.abortController.signal });
            const Product: faceProduct[] | null = await Res.json();
            if (!Res.ok || !Product) {
                throw new Error("Page Not Found 404");
            }
            return Product;
        } catch (error) {
            return (error.name !== "AbortError") ? `${error.message}` : "";
        }
    }
    Abort() {
        if (this.abortController !== null) { this.abortController.abort(); }
    }
}

export default new ProcessingRequest();