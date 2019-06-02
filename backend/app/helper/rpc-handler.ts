import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export class RpcHandler {

    private url: string;
    private config: AxiosRequestConfig;

    constructor(url: string) {
        this.url = url;
        this.config = {
            headers: { "content-type": "text/plain" },
            auth: {username: "zcash.conf/rpc user", password: "zcash.conf/rpc pass"}
        };
    }

    public exec(method: string) {
        const bodyContent = {
            jsonrpc: 1.0, 
            id: "curltext",
            method: method,
            params: [] };
    
        return axios.post(this.url, bodyContent, this.config);
    }
}