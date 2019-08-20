import { WS } from 'Services';

export const processPurchase = async(proposal_id, price) =>
    WS.buyAndSubscribe({ buy: proposal_id, price });
