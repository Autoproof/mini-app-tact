import { 
    Cell,
    Slice, 
    Address, 
    Builder, 
    beginCell, 
    ComputeError, 
    TupleItem, 
    TupleReader, 
    Dictionary, 
    contractAddress, 
    ContractProvider, 
    Sender, 
    Contract, 
    ContractABI, 
    ABIType,
    ABIGetter,
    ABIReceiver,
    TupleBuilder,
    DictionaryValue
} from '@ton/core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadGetterTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    let builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Slice;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw.asCell());
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef().asSlice();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell().asSlice();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadGetterTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell().asSlice();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounced);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw.asCell());
    return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
    };
}

export function loadSendParameters(slice: Slice) {
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadGetterTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounce);
    builder.writeAddress(source.to);
    builder.writeNumber(source.value);
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type ChangeOwner = {
    $$type: 'ChangeOwner';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwner(src: ChangeOwner) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2174598809, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeOwner(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2174598809) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwner(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadGetterTupleChangeOwner(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwner(source: ChangeOwner) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.newOwner);
    return builder.build();
}

function dictValueParserChangeOwner(): DictionaryValue<ChangeOwner> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeChangeOwner(src)).endCell());
        },
        parse: (src) => {
            return loadChangeOwner(src.loadRef().beginParse());
        }
    }
}

export type ChangeOwnerOk = {
    $$type: 'ChangeOwnerOk';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwnerOk(src: ChangeOwnerOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(846932810, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeOwnerOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 846932810) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwnerOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadGetterTupleChangeOwnerOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwnerOk(source: ChangeOwnerOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.newOwner);
    return builder.build();
}

function dictValueParserChangeOwnerOk(): DictionaryValue<ChangeOwnerOk> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeChangeOwnerOk(src)).endCell());
        },
        parse: (src) => {
            return loadChangeOwnerOk(src.loadRef().beginParse());
        }
    }
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadGetterTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadDeploy(src.loadRef().beginParse());
        }
    }
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadGetterTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeployOk(src)).endCell());
        },
        parse: (src) => {
            return loadDeployOk(src.loadRef().beginParse());
        }
    }
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1829761339, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.cashback);
    };
}

export function loadFactoryDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _cashback = sc_0.loadAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadGetterTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.cashback);
    return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadFactoryDeploy(src.loadRef().beginParse());
        }
    }
}

export type ExclusiveRightsClaim = {
    $$type: 'ExclusiveRightsClaim';
    author: Address;
    authorDetails: PersonDetails;
    amount: bigint;
    sentDocuments: boolean;
    viewedDocuments: boolean;
}

export function storeExclusiveRightsClaim(src: ExclusiveRightsClaim) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.author);
        b_0.store(storePersonDetails(src.authorDetails));
        b_0.storeCoins(src.amount);
        b_0.storeBit(src.sentDocuments);
        b_0.storeBit(src.viewedDocuments);
    };
}

export function loadExclusiveRightsClaim(slice: Slice) {
    let sc_0 = slice;
    let _author = sc_0.loadAddress();
    let _authorDetails = loadPersonDetails(sc_0);
    let _amount = sc_0.loadCoins();
    let _sentDocuments = sc_0.loadBit();
    let _viewedDocuments = sc_0.loadBit();
    return { $$type: 'ExclusiveRightsClaim' as const, author: _author, authorDetails: _authorDetails, amount: _amount, sentDocuments: _sentDocuments, viewedDocuments: _viewedDocuments };
}

function loadTupleExclusiveRightsClaim(source: TupleReader) {
    let _author = source.readAddress();
    const _authorDetails = loadTuplePersonDetails(source);
    let _amount = source.readBigNumber();
    let _sentDocuments = source.readBoolean();
    let _viewedDocuments = source.readBoolean();
    return { $$type: 'ExclusiveRightsClaim' as const, author: _author, authorDetails: _authorDetails, amount: _amount, sentDocuments: _sentDocuments, viewedDocuments: _viewedDocuments };
}

function loadGetterTupleExclusiveRightsClaim(source: TupleReader) {
    let _author = source.readAddress();
    const _authorDetails = loadGetterTuplePersonDetails(source);
    let _amount = source.readBigNumber();
    let _sentDocuments = source.readBoolean();
    let _viewedDocuments = source.readBoolean();
    return { $$type: 'ExclusiveRightsClaim' as const, author: _author, authorDetails: _authorDetails, amount: _amount, sentDocuments: _sentDocuments, viewedDocuments: _viewedDocuments };
}

function storeTupleExclusiveRightsClaim(source: ExclusiveRightsClaim) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.author);
    builder.writeTuple(storeTuplePersonDetails(source.authorDetails));
    builder.writeNumber(source.amount);
    builder.writeBoolean(source.sentDocuments);
    builder.writeBoolean(source.viewedDocuments);
    return builder.build();
}

function dictValueParserExclusiveRightsClaim(): DictionaryValue<ExclusiveRightsClaim> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeExclusiveRightsClaim(src)).endCell());
        },
        parse: (src) => {
            return loadExclusiveRightsClaim(src.loadRef().beginParse());
        }
    }
}

export type SetPrice = {
    $$type: 'SetPrice';
    price: bigint | null;
}

export function storeSetPrice(src: SetPrice) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1092820085, 32);
        if (src.price !== null && src.price !== undefined) { b_0.storeBit(true).storeCoins(src.price); } else { b_0.storeBit(false); }
    };
}

export function loadSetPrice(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1092820085) { throw Error('Invalid prefix'); }
    let _price = sc_0.loadBit() ? sc_0.loadCoins() : null;
    return { $$type: 'SetPrice' as const, price: _price };
}

function loadTupleSetPrice(source: TupleReader) {
    let _price = source.readBigNumberOpt();
    return { $$type: 'SetPrice' as const, price: _price };
}

function loadGetterTupleSetPrice(source: TupleReader) {
    let _price = source.readBigNumberOpt();
    return { $$type: 'SetPrice' as const, price: _price };
}

function storeTupleSetPrice(source: SetPrice) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.price);
    return builder.build();
}

function dictValueParserSetPrice(): DictionaryValue<SetPrice> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSetPrice(src)).endCell());
        },
        parse: (src) => {
            return loadSetPrice(src.loadRef().beginParse());
        }
    }
}

export type ClaimRequest = {
    $$type: 'ClaimRequest';
    authorDetails: PersonDetails;
}

export function storeClaimRequest(src: ClaimRequest) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3578439401, 32);
        b_0.store(storePersonDetails(src.authorDetails));
    };
}

export function loadClaimRequest(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3578439401) { throw Error('Invalid prefix'); }
    let _authorDetails = loadPersonDetails(sc_0);
    return { $$type: 'ClaimRequest' as const, authorDetails: _authorDetails };
}

function loadTupleClaimRequest(source: TupleReader) {
    const _authorDetails = loadTuplePersonDetails(source);
    return { $$type: 'ClaimRequest' as const, authorDetails: _authorDetails };
}

function loadGetterTupleClaimRequest(source: TupleReader) {
    const _authorDetails = loadGetterTuplePersonDetails(source);
    return { $$type: 'ClaimRequest' as const, authorDetails: _authorDetails };
}

function storeTupleClaimRequest(source: ClaimRequest) {
    let builder = new TupleBuilder();
    builder.writeTuple(storeTuplePersonDetails(source.authorDetails));
    return builder.build();
}

function dictValueParserClaimRequest(): DictionaryValue<ClaimRequest> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeClaimRequest(src)).endCell());
        },
        parse: (src) => {
            return loadClaimRequest(src.loadRef().beginParse());
        }
    }
}

export type ClaimApproval = {
    $$type: 'ClaimApproval';
    assignmentHash: string;
}

export function storeClaimApproval(src: ClaimApproval) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(774961926, 32);
        b_0.storeStringRefTail(src.assignmentHash);
    };
}

export function loadClaimApproval(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 774961926) { throw Error('Invalid prefix'); }
    let _assignmentHash = sc_0.loadStringRefTail();
    return { $$type: 'ClaimApproval' as const, assignmentHash: _assignmentHash };
}

function loadTupleClaimApproval(source: TupleReader) {
    let _assignmentHash = source.readString();
    return { $$type: 'ClaimApproval' as const, assignmentHash: _assignmentHash };
}

function loadGetterTupleClaimApproval(source: TupleReader) {
    let _assignmentHash = source.readString();
    return { $$type: 'ClaimApproval' as const, assignmentHash: _assignmentHash };
}

function storeTupleClaimApproval(source: ClaimApproval) {
    let builder = new TupleBuilder();
    builder.writeString(source.assignmentHash);
    return builder.build();
}

function dictValueParserClaimApproval(): DictionaryValue<ClaimApproval> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeClaimApproval(src)).endCell());
        },
        parse: (src) => {
            return loadClaimApproval(src.loadRef().beginParse());
        }
    }
}

export type Document$Data = {
    $$type: 'Document$Data';
    parent: Address;
    seqno: bigint;
    commissions: Commissions;
    author: Address;
    exclusiveRightsOwner: Address;
    exclusiveRightsOwnerDetails: PersonDetails;
    document: DocumentData;
    price: bigint | null;
    currentClaim: ExclusiveRightsClaim | null;
    assignmentHash: string | null;
    royaltyWalletAddress: Address | null;
}

export function storeDocument$Data(src: Document$Data) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.parent);
        b_0.storeUint(src.seqno, 256);
        let b_1 = new Builder();
        b_1.store(storeCommissions(src.commissions));
        b_1.storeAddress(src.author);
        let b_2 = new Builder();
        b_2.storeAddress(src.exclusiveRightsOwner);
        b_2.store(storePersonDetails(src.exclusiveRightsOwnerDetails));
        let b_3 = new Builder();
        b_3.store(storeDocumentData(src.document));
        if (src.price !== null && src.price !== undefined) { b_3.storeBit(true).storeCoins(src.price); } else { b_3.storeBit(false); }
        let b_4 = new Builder();
        if (src.currentClaim !== null && src.currentClaim !== undefined) { b_4.storeBit(true); b_4.store(storeExclusiveRightsClaim(src.currentClaim)); } else { b_4.storeBit(false); }
        if (src.assignmentHash !== null && src.assignmentHash !== undefined) { b_4.storeBit(true).storeStringRefTail(src.assignmentHash); } else { b_4.storeBit(false); }
        b_4.storeAddress(src.royaltyWalletAddress);
        b_3.storeRef(b_4.endCell());
        b_2.storeRef(b_3.endCell());
        b_1.storeRef(b_2.endCell());
        b_0.storeRef(b_1.endCell());
    };
}

export function loadDocument$Data(slice: Slice) {
    let sc_0 = slice;
    let _parent = sc_0.loadAddress();
    let _seqno = sc_0.loadUintBig(256);
    let sc_1 = sc_0.loadRef().beginParse();
    let _commissions = loadCommissions(sc_1);
    let _author = sc_1.loadAddress();
    let sc_2 = sc_1.loadRef().beginParse();
    let _exclusiveRightsOwner = sc_2.loadAddress();
    let _exclusiveRightsOwnerDetails = loadPersonDetails(sc_2);
    let sc_3 = sc_2.loadRef().beginParse();
    let _document = loadDocumentData(sc_3);
    let _price = sc_3.loadBit() ? sc_3.loadCoins() : null;
    let sc_4 = sc_3.loadRef().beginParse();
    let _currentClaim = sc_4.loadBit() ? loadExclusiveRightsClaim(sc_4) : null;
    let _assignmentHash = sc_4.loadBit() ? sc_4.loadStringRefTail() : null;
    let _royaltyWalletAddress = sc_4.loadMaybeAddress();
    return { $$type: 'Document$Data' as const, parent: _parent, seqno: _seqno, commissions: _commissions, author: _author, exclusiveRightsOwner: _exclusiveRightsOwner, exclusiveRightsOwnerDetails: _exclusiveRightsOwnerDetails, document: _document, price: _price, currentClaim: _currentClaim, assignmentHash: _assignmentHash, royaltyWalletAddress: _royaltyWalletAddress };
}

function loadTupleDocument$Data(source: TupleReader) {
    let _parent = source.readAddress();
    let _seqno = source.readBigNumber();
    const _commissions = loadTupleCommissions(source);
    let _author = source.readAddress();
    let _exclusiveRightsOwner = source.readAddress();
    const _exclusiveRightsOwnerDetails = loadTuplePersonDetails(source);
    const _document = loadTupleDocumentData(source);
    let _price = source.readBigNumberOpt();
    const _currentClaim_p = source.readTupleOpt();
    const _currentClaim = _currentClaim_p ? loadTupleExclusiveRightsClaim(_currentClaim_p) : null;
    let _assignmentHash = source.readStringOpt();
    let _royaltyWalletAddress = source.readAddressOpt();
    return { $$type: 'Document$Data' as const, parent: _parent, seqno: _seqno, commissions: _commissions, author: _author, exclusiveRightsOwner: _exclusiveRightsOwner, exclusiveRightsOwnerDetails: _exclusiveRightsOwnerDetails, document: _document, price: _price, currentClaim: _currentClaim, assignmentHash: _assignmentHash, royaltyWalletAddress: _royaltyWalletAddress };
}

function loadGetterTupleDocument$Data(source: TupleReader) {
    let _parent = source.readAddress();
    let _seqno = source.readBigNumber();
    const _commissions = loadGetterTupleCommissions(source);
    let _author = source.readAddress();
    let _exclusiveRightsOwner = source.readAddress();
    const _exclusiveRightsOwnerDetails = loadGetterTuplePersonDetails(source);
    const _document = loadGetterTupleDocumentData(source);
    let _price = source.readBigNumberOpt();
    const _currentClaim_p = source.readTupleOpt();
    const _currentClaim = _currentClaim_p ? loadTupleExclusiveRightsClaim(_currentClaim_p) : null;
    let _assignmentHash = source.readStringOpt();
    let _royaltyWalletAddress = source.readAddressOpt();
    return { $$type: 'Document$Data' as const, parent: _parent, seqno: _seqno, commissions: _commissions, author: _author, exclusiveRightsOwner: _exclusiveRightsOwner, exclusiveRightsOwnerDetails: _exclusiveRightsOwnerDetails, document: _document, price: _price, currentClaim: _currentClaim, assignmentHash: _assignmentHash, royaltyWalletAddress: _royaltyWalletAddress };
}

function storeTupleDocument$Data(source: Document$Data) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.parent);
    builder.writeNumber(source.seqno);
    builder.writeTuple(storeTupleCommissions(source.commissions));
    builder.writeAddress(source.author);
    builder.writeAddress(source.exclusiveRightsOwner);
    builder.writeTuple(storeTuplePersonDetails(source.exclusiveRightsOwnerDetails));
    builder.writeTuple(storeTupleDocumentData(source.document));
    builder.writeNumber(source.price);
    if (source.currentClaim !== null && source.currentClaim !== undefined) {
        builder.writeTuple(storeTupleExclusiveRightsClaim(source.currentClaim));
    } else {
        builder.writeTuple(null);
    }
    builder.writeString(source.assignmentHash);
    builder.writeAddress(source.royaltyWalletAddress);
    return builder.build();
}

function dictValueParserDocument$Data(): DictionaryValue<Document$Data> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDocument$Data(src)).endCell());
        },
        parse: (src) => {
            return loadDocument$Data(src.loadRef().beginParse());
        }
    }
}

export type PersonDetails = {
    $$type: 'PersonDetails';
    name: string;
    address: string;
}

export function storePersonDetails(src: PersonDetails) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeStringRefTail(src.name);
        b_0.storeStringRefTail(src.address);
    };
}

export function loadPersonDetails(slice: Slice) {
    let sc_0 = slice;
    let _name = sc_0.loadStringRefTail();
    let _address = sc_0.loadStringRefTail();
    return { $$type: 'PersonDetails' as const, name: _name, address: _address };
}

function loadTuplePersonDetails(source: TupleReader) {
    let _name = source.readString();
    let _address = source.readString();
    return { $$type: 'PersonDetails' as const, name: _name, address: _address };
}

function loadGetterTuplePersonDetails(source: TupleReader) {
    let _name = source.readString();
    let _address = source.readString();
    return { $$type: 'PersonDetails' as const, name: _name, address: _address };
}

function storeTuplePersonDetails(source: PersonDetails) {
    let builder = new TupleBuilder();
    builder.writeString(source.name);
    builder.writeString(source.address);
    return builder.build();
}

function dictValueParserPersonDetails(): DictionaryValue<PersonDetails> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storePersonDetails(src)).endCell());
        },
        parse: (src) => {
            return loadPersonDetails(src.loadRef().beginParse());
        }
    }
}

export type DocumentData = {
    $$type: 'DocumentData';
    author: PersonDetails;
    title: string;
    rootHash: string;
    data: string;
    tags: string | null;
    description: string | null;
}

export function storeDocumentData(src: DocumentData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.store(storePersonDetails(src.author));
        let b_1 = new Builder();
        b_1.storeStringRefTail(src.title);
        b_1.storeStringRefTail(src.rootHash);
        b_1.storeStringRefTail(src.data);
        let b_2 = new Builder();
        if (src.tags !== null && src.tags !== undefined) { b_2.storeBit(true).storeStringRefTail(src.tags); } else { b_2.storeBit(false); }
        if (src.description !== null && src.description !== undefined) { b_2.storeBit(true).storeStringRefTail(src.description); } else { b_2.storeBit(false); }
        b_1.storeRef(b_2.endCell());
        b_0.storeRef(b_1.endCell());
    };
}

export function loadDocumentData(slice: Slice) {
    let sc_0 = slice;
    let _author = loadPersonDetails(sc_0);
    let sc_1 = sc_0.loadRef().beginParse();
    let _title = sc_1.loadStringRefTail();
    let _rootHash = sc_1.loadStringRefTail();
    let _data = sc_1.loadStringRefTail();
    let sc_2 = sc_1.loadRef().beginParse();
    let _tags = sc_2.loadBit() ? sc_2.loadStringRefTail() : null;
    let _description = sc_2.loadBit() ? sc_2.loadStringRefTail() : null;
    return { $$type: 'DocumentData' as const, author: _author, title: _title, rootHash: _rootHash, data: _data, tags: _tags, description: _description };
}

function loadTupleDocumentData(source: TupleReader) {
    const _author = loadTuplePersonDetails(source);
    let _title = source.readString();
    let _rootHash = source.readString();
    let _data = source.readString();
    let _tags = source.readStringOpt();
    let _description = source.readStringOpt();
    return { $$type: 'DocumentData' as const, author: _author, title: _title, rootHash: _rootHash, data: _data, tags: _tags, description: _description };
}

function loadGetterTupleDocumentData(source: TupleReader) {
    const _author = loadGetterTuplePersonDetails(source);
    let _title = source.readString();
    let _rootHash = source.readString();
    let _data = source.readString();
    let _tags = source.readStringOpt();
    let _description = source.readStringOpt();
    return { $$type: 'DocumentData' as const, author: _author, title: _title, rootHash: _rootHash, data: _data, tags: _tags, description: _description };
}

function storeTupleDocumentData(source: DocumentData) {
    let builder = new TupleBuilder();
    builder.writeTuple(storeTuplePersonDetails(source.author));
    builder.writeString(source.title);
    builder.writeString(source.rootHash);
    builder.writeString(source.data);
    builder.writeString(source.tags);
    builder.writeString(source.description);
    return builder.build();
}

function dictValueParserDocumentData(): DictionaryValue<DocumentData> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDocumentData(src)).endCell());
        },
        parse: (src) => {
            return loadDocumentData(src.loadRef().beginParse());
        }
    }
}

export type GetFunds = {
    $$type: 'GetFunds';
    amount: bigint;
}

export function storeGetFunds(src: GetFunds) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(170958879, 32);
        b_0.storeCoins(src.amount);
    };
}

export function loadGetFunds(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 170958879) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadCoins();
    return { $$type: 'GetFunds' as const, amount: _amount };
}

function loadTupleGetFunds(source: TupleReader) {
    let _amount = source.readBigNumber();
    return { $$type: 'GetFunds' as const, amount: _amount };
}

function loadGetterTupleGetFunds(source: TupleReader) {
    let _amount = source.readBigNumber();
    return { $$type: 'GetFunds' as const, amount: _amount };
}

function storeTupleGetFunds(source: GetFunds) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    return builder.build();
}

function dictValueParserGetFunds(): DictionaryValue<GetFunds> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeGetFunds(src)).endCell());
        },
        parse: (src) => {
            return loadGetFunds(src.loadRef().beginParse());
        }
    }
}

export type SetCommissions = {
    $$type: 'SetCommissions';
    commissions: Commissions;
    documentAddress: Address | null;
}

export function storeSetCommissions(src: SetCommissions) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1263034725, 32);
        b_0.store(storeCommissions(src.commissions));
        b_0.storeAddress(src.documentAddress);
    };
}

export function loadSetCommissions(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1263034725) { throw Error('Invalid prefix'); }
    let _commissions = loadCommissions(sc_0);
    let _documentAddress = sc_0.loadMaybeAddress();
    return { $$type: 'SetCommissions' as const, commissions: _commissions, documentAddress: _documentAddress };
}

function loadTupleSetCommissions(source: TupleReader) {
    const _commissions = loadTupleCommissions(source);
    let _documentAddress = source.readAddressOpt();
    return { $$type: 'SetCommissions' as const, commissions: _commissions, documentAddress: _documentAddress };
}

function loadGetterTupleSetCommissions(source: TupleReader) {
    const _commissions = loadGetterTupleCommissions(source);
    let _documentAddress = source.readAddressOpt();
    return { $$type: 'SetCommissions' as const, commissions: _commissions, documentAddress: _documentAddress };
}

function storeTupleSetCommissions(source: SetCommissions) {
    let builder = new TupleBuilder();
    builder.writeTuple(storeTupleCommissions(source.commissions));
    builder.writeAddress(source.documentAddress);
    return builder.build();
}

function dictValueParserSetCommissions(): DictionaryValue<SetCommissions> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSetCommissions(src)).endCell());
        },
        parse: (src) => {
            return loadSetCommissions(src.loadRef().beginParse());
        }
    }
}

export type Commissions = {
    $$type: 'Commissions';
    transfershipCommissionPercentage: bigint;
    royaltyCommissionPercentage: bigint;
}

export function storeCommissions(src: Commissions) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(src.transfershipCommissionPercentage, 256);
        b_0.storeUint(src.royaltyCommissionPercentage, 256);
    };
}

export function loadCommissions(slice: Slice) {
    let sc_0 = slice;
    let _transfershipCommissionPercentage = sc_0.loadUintBig(256);
    let _royaltyCommissionPercentage = sc_0.loadUintBig(256);
    return { $$type: 'Commissions' as const, transfershipCommissionPercentage: _transfershipCommissionPercentage, royaltyCommissionPercentage: _royaltyCommissionPercentage };
}

function loadTupleCommissions(source: TupleReader) {
    let _transfershipCommissionPercentage = source.readBigNumber();
    let _royaltyCommissionPercentage = source.readBigNumber();
    return { $$type: 'Commissions' as const, transfershipCommissionPercentage: _transfershipCommissionPercentage, royaltyCommissionPercentage: _royaltyCommissionPercentage };
}

function loadGetterTupleCommissions(source: TupleReader) {
    let _transfershipCommissionPercentage = source.readBigNumber();
    let _royaltyCommissionPercentage = source.readBigNumber();
    return { $$type: 'Commissions' as const, transfershipCommissionPercentage: _transfershipCommissionPercentage, royaltyCommissionPercentage: _royaltyCommissionPercentage };
}

function storeTupleCommissions(source: Commissions) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.transfershipCommissionPercentage);
    builder.writeNumber(source.royaltyCommissionPercentage);
    return builder.build();
}

function dictValueParserCommissions(): DictionaryValue<Commissions> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeCommissions(src)).endCell());
        },
        parse: (src) => {
            return loadCommissions(src.loadRef().beginParse());
        }
    }
}

export type DeclareDocument = {
    $$type: 'DeclareDocument';
    document: DocumentData;
    royaltyWalletAddress: Address | null;
}

export function storeDeclareDocument(src: DeclareDocument) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1261895496, 32);
        b_0.store(storeDocumentData(src.document));
        b_0.storeAddress(src.royaltyWalletAddress);
    };
}

export function loadDeclareDocument(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1261895496) { throw Error('Invalid prefix'); }
    let _document = loadDocumentData(sc_0);
    let _royaltyWalletAddress = sc_0.loadMaybeAddress();
    return { $$type: 'DeclareDocument' as const, document: _document, royaltyWalletAddress: _royaltyWalletAddress };
}

function loadTupleDeclareDocument(source: TupleReader) {
    const _document = loadTupleDocumentData(source);
    let _royaltyWalletAddress = source.readAddressOpt();
    return { $$type: 'DeclareDocument' as const, document: _document, royaltyWalletAddress: _royaltyWalletAddress };
}

function loadGetterTupleDeclareDocument(source: TupleReader) {
    const _document = loadGetterTupleDocumentData(source);
    let _royaltyWalletAddress = source.readAddressOpt();
    return { $$type: 'DeclareDocument' as const, document: _document, royaltyWalletAddress: _royaltyWalletAddress };
}

function storeTupleDeclareDocument(source: DeclareDocument) {
    let builder = new TupleBuilder();
    builder.writeTuple(storeTupleDocumentData(source.document));
    builder.writeAddress(source.royaltyWalletAddress);
    return builder.build();
}

function dictValueParserDeclareDocument(): DictionaryValue<DeclareDocument> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeclareDocument(src)).endCell());
        },
        parse: (src) => {
            return loadDeclareDocument(src.loadRef().beginParse());
        }
    }
}

export type CancelDocumentClaim = {
    $$type: 'CancelDocumentClaim';
    documentAddress: Address;
}

export function storeCancelDocumentClaim(src: CancelDocumentClaim) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(614687775, 32);
        b_0.storeAddress(src.documentAddress);
    };
}

export function loadCancelDocumentClaim(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 614687775) { throw Error('Invalid prefix'); }
    let _documentAddress = sc_0.loadAddress();
    return { $$type: 'CancelDocumentClaim' as const, documentAddress: _documentAddress };
}

function loadTupleCancelDocumentClaim(source: TupleReader) {
    let _documentAddress = source.readAddress();
    return { $$type: 'CancelDocumentClaim' as const, documentAddress: _documentAddress };
}

function loadGetterTupleCancelDocumentClaim(source: TupleReader) {
    let _documentAddress = source.readAddress();
    return { $$type: 'CancelDocumentClaim' as const, documentAddress: _documentAddress };
}

function storeTupleCancelDocumentClaim(source: CancelDocumentClaim) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.documentAddress);
    return builder.build();
}

function dictValueParserCancelDocumentClaim(): DictionaryValue<CancelDocumentClaim> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeCancelDocumentClaim(src)).endCell());
        },
        parse: (src) => {
            return loadCancelDocumentClaim(src.loadRef().beginParse());
        }
    }
}

export type SetTheNextAutoproof = {
    $$type: 'SetTheNextAutoproof';
    contractAddress: Address | null;
}

export function storeSetTheNextAutoproof(src: SetTheNextAutoproof) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1469863893, 32);
        b_0.storeAddress(src.contractAddress);
    };
}

export function loadSetTheNextAutoproof(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1469863893) { throw Error('Invalid prefix'); }
    let _contractAddress = sc_0.loadMaybeAddress();
    return { $$type: 'SetTheNextAutoproof' as const, contractAddress: _contractAddress };
}

function loadTupleSetTheNextAutoproof(source: TupleReader) {
    let _contractAddress = source.readAddressOpt();
    return { $$type: 'SetTheNextAutoproof' as const, contractAddress: _contractAddress };
}

function loadGetterTupleSetTheNextAutoproof(source: TupleReader) {
    let _contractAddress = source.readAddressOpt();
    return { $$type: 'SetTheNextAutoproof' as const, contractAddress: _contractAddress };
}

function storeTupleSetTheNextAutoproof(source: SetTheNextAutoproof) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.contractAddress);
    return builder.build();
}

function dictValueParserSetTheNextAutoproof(): DictionaryValue<SetTheNextAutoproof> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSetTheNextAutoproof(src)).endCell());
        },
        parse: (src) => {
            return loadSetTheNextAutoproof(src.loadRef().beginParse());
        }
    }
}

export type Autoproof$Data = {
    $$type: 'Autoproof$Data';
    owner: Address;
    stopped: boolean;
    documentsNumber: bigint;
    commissions: Commissions;
    nextAutoproofAddress: Address | null;
}

export function storeAutoproof$Data(src: Autoproof$Data) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.owner);
        b_0.storeBit(src.stopped);
        b_0.storeUint(src.documentsNumber, 256);
        let b_1 = new Builder();
        b_1.store(storeCommissions(src.commissions));
        b_1.storeAddress(src.nextAutoproofAddress);
        b_0.storeRef(b_1.endCell());
    };
}

export function loadAutoproof$Data(slice: Slice) {
    let sc_0 = slice;
    let _owner = sc_0.loadAddress();
    let _stopped = sc_0.loadBit();
    let _documentsNumber = sc_0.loadUintBig(256);
    let sc_1 = sc_0.loadRef().beginParse();
    let _commissions = loadCommissions(sc_1);
    let _nextAutoproofAddress = sc_1.loadMaybeAddress();
    return { $$type: 'Autoproof$Data' as const, owner: _owner, stopped: _stopped, documentsNumber: _documentsNumber, commissions: _commissions, nextAutoproofAddress: _nextAutoproofAddress };
}

function loadTupleAutoproof$Data(source: TupleReader) {
    let _owner = source.readAddress();
    let _stopped = source.readBoolean();
    let _documentsNumber = source.readBigNumber();
    const _commissions = loadTupleCommissions(source);
    let _nextAutoproofAddress = source.readAddressOpt();
    return { $$type: 'Autoproof$Data' as const, owner: _owner, stopped: _stopped, documentsNumber: _documentsNumber, commissions: _commissions, nextAutoproofAddress: _nextAutoproofAddress };
}

function loadGetterTupleAutoproof$Data(source: TupleReader) {
    let _owner = source.readAddress();
    let _stopped = source.readBoolean();
    let _documentsNumber = source.readBigNumber();
    const _commissions = loadGetterTupleCommissions(source);
    let _nextAutoproofAddress = source.readAddressOpt();
    return { $$type: 'Autoproof$Data' as const, owner: _owner, stopped: _stopped, documentsNumber: _documentsNumber, commissions: _commissions, nextAutoproofAddress: _nextAutoproofAddress };
}

function storeTupleAutoproof$Data(source: Autoproof$Data) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.owner);
    builder.writeBoolean(source.stopped);
    builder.writeNumber(source.documentsNumber);
    builder.writeTuple(storeTupleCommissions(source.commissions));
    builder.writeAddress(source.nextAutoproofAddress);
    return builder.build();
}

function dictValueParserAutoproof$Data(): DictionaryValue<Autoproof$Data> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeAutoproof$Data(src)).endCell());
        },
        parse: (src) => {
            return loadAutoproof$Data(src.loadRef().beginParse());
        }
    }
}

 type Autoproof_init_args = {
    $$type: 'Autoproof_init_args';
}

function initAutoproof_init_args(src: Autoproof_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
    };
}

async function Autoproof_init() {
    const __code = Cell.fromBase64('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');
    const __system = Cell.fromBase64('te6cckEClwEAGQ4AAQHAAQIBIAJZAQW/TPQDART/APSkE/S88sgLBAIBYgUlA+LQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zwREhEUERIRERETEREREBESERAPEREPDhEQDhDfVRzbPPLggsj4QwHMfwHKABETERIREREQVeDbPMntVFEGIQT27aLt+wGSMH/gcCHXScIflTAg1wsf3iCCEEEjHHW6jzUw0x8BghBBIxx1uvLggdIAAZL6AJJtAeIBMTSBQiz4Qi/HBfL0gUqeI27y9Ij4QgF/bds8f+AgghDVSqbpuo6bMNMfAYIQ1Uqm6bry4IHUAdAB1AHQEmwS2zx/B30ICgAoAAAAAFByaWNlIGlzIHVwZGF0ZWQC9IE42yZus/L0gVXB+EFvJBNfAycgbvLQgBESERcREhERERYREREQERUREA8RFA8OERMODREXDQwRFgwLERULChEUCgkREwkIERcIBxEWBwYRFQYFERQFBBETBAMRFwMCERYCAREVAREU2zwBERUBoAERFQG8AREVAfL0PAkAiIFKnhEUbgERFAHy9PhC+EFvJBNfAxMCERECAREVAXBwbwYNERINDBERDAsREAsQrxCeEI0QfBBrEFoQSRA4R2AQNUATBG7gIIIQLjD7BrqOlTDTHwGCEC4w+wa68uCB1AHQMds8f+AgghBLSGFluuMCIIIQCjCgH7rjAsAACxMVFwS2gR5VJG6z8vSBdmwkIG7y0IBvJhVfBfL0gVohJCBu8tCAbyZsUfL0gQ8VJCBu8tCAbyZfBfhCxwXy9CMgbvLQgG8mECVfBXCIVhFVIEMwcAFtbds8IW6z4wAhbgx+DQ8AWAAAAABTZW5kIGZ1bmRzIHRvIHRoZSBleGNsdXNpdmUgcmlnaHRzIG93bmVyA/ghIG7y0IAREhEUERIRERETEREREBEUERAPERMPDhEUDg0REw0MERQMCxETCwoRFAoJERMJCBEUCAcREwcGERQGBRETBQQRFAQDERMDAhEUAgEREwERFNs8cIgDERcDQzBwAW1t2zwRERETEREREBESERAPEREPDhEQDlUdSg5+ADYAAAAAU2VuZCByb3lhbHR5IGNvbW1pc3Npb24E/o68ERIRExESERERExERERARExEQDxETDw4R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UT0CA3jgOjsCT6EXbPNs8VxBfD2wxIG6SMG2fIG7y0IBvJlBDbwJBM28F4iBukjBt3pRiAIXoEds82zxXEF8PbDGUTwC8FYSVhJWElYSVhJWElYSVhJWElYSVhJWElYSVhJWElYSVhJWElYSERIRJRESERERJBERERARIxEQDxEiDw4RIQ4NESANDBEfDAsRHgsKER0KCREcCQgRGwgHERoHBhEZBgURGAUEERcEAxEWAwIRFQIBERQBERPbPD1BAQwjbrPjAnA+AfhWElYSVhJWElYSVhJWElYSVhJWElYSVhJWElYSVhJWElYSVhJWElYWIG7y0ICBA+ipBBESESYREhERESUREREQESQREA8RIw8OESIODREhDQwRIAwLER8LChEeCgkRHQkIERwIBxEbBwYRGgYFERkFBBEYBAMRFwMCERYCPwFcAREVAREU2zxXEF8PbDESqAEREwEBERIBARERAQEREAEfHh0cGxoZGBcWFRRDMEAABFYQAXwREhETERIRERETEREREBETERAPERMPDhETDg0REw0MERMMCxETCwoREwoJERMJERMIBwZVQNs8VxBfD2wxoEoCASBDUAIBIEROAgEgRUkCASBGRwAQqr7tRNDSAAECGKs/2zzbPFcQXw9sMVFIAAIgAhmtpu2ebZ4riC+HthjAUUoBDCNus+MCcEsB+FYSVhJWElYSVhJWElYSVhJWElYSVhJWElYSVhJWElYSVhJWElYSVhYgbvLQgIED6KkEERIRJhESERERJRERERARJBEQDxEjDw4RIg4NESENDBEgDAsRHwsKER4KCREdCQgRHAgHERsHBhEaBgURGQUEERgEAxEXAwIRFgJMAVwBERUBERTbPFcQXw9sMRKoARETAQEREgEBEREBAREQAR8eHRwbGhkYFxYVFEMwTQACLwIZsvm2zzbPFcQXw9sMYFFPAAIuAh23Gltnm2eK4kriC+HmZjBRWANs7UTQ1AH4Y9IAAY6W2zxXExERERIREREQEREREA8REA9VDuD4KNcLCoMJuvLgids8DdFVC9s8UlVXAfT6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdP/1AHQ0//T/1kC+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAHUMND6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdQB0AHUAdASAtQw0FMCsts8B9IAAZL6AJJtAeLUMNDSAAGONfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB1AHQAdQB0BIC+gDSANIABgVVIG8GkW3iAdIAAZPUAdCRbeIBXlQAmCDXCwHDAI4f+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiJRy1yFt4jERERETERERERESEREPERAPELwQmhCJEHgQZxBWEEUCovpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgBgQEB1wD6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdQB0Ns8B9P/0/9ZAl5WAIIg1wsBwwCOH/pAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IiUctchbeIxEK0QrBCrEIkQeBBnEFYQRRA0EgAybW1tVH3LCBEQCBB/EC4QjVDLEHpJdl4xEwAEU8sBBbwKDFoBFP8A9KQT9LzyyAtbAgFiXIEDetAB0NMDAXGwowH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIVFBTA28E+GEC+GLbPFUV2zzy4IKTXYAE7u2i7fsBkjB/4HAh10nCH5UwINcLH94gghBLNv9Iuo9EMNMfAYIQSzb/SLry4IHbPAcg1wsBwwCOH/pAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IiUctchbeIYbBjbPH/gIIIQJKNkH7rjAiCCEEtIYWW6Xl9oagBm1AHQAdQB0BIC1AHQ1AHQAdQB0AHUAdAB1DDQ0gABk9QB0JFt4gHSAAGT1DDQkjBt4hBXAzAQXRBMEDtKmNs8VHdtVH/tL9s8A6QjbrN6YGEAqFuCAM9ciwhQBgH5AQH5Ab0V8vSCAJy9iwhQBAH5AQH5Ab0T8vSBFDeLCFgB+QEB+QG98vSCAPT+iwhYAfkBAfkBvfL0ggDuiIsIWAH5AQH5Ab3y9APOj2AjIG7y0IAQeBBoEF4QTRA8S6nIVXCCEEs2/0hQCcsfVWDbPAEgbpUwcAHLAY4eINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8W4sn4QW8kE18DECN/cFAEA21t2zzjDgVDNGV+YgP4+EP4KPhCSpAjUIkQNxAmBRERBQQREAQQP07QUuBWElAO2zxccFnIcAHLAXMBywFwAcsAEszMyfkAyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IiI+EFvJBNfA1USfwUEcEEz2zwVEDRBMGNnfgFgDdD0BDBtAYFpngGAEPQPb6Hy4IcBgWmeIgKAEPQXyAHI9ADJAcxwAcoAVcAO2zzJZAKoUNwg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxYagQEBzwBQCCDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFshVYAjbPEAEAsv/y/8BZWYAvkdlyFjPFslYzMhYzxbJAczIyFAEzxbJUAPMyFjPFskBzMhQBc8WyVAEzMgjbrOdfwHKAMhQBM8WyVADzJYzcFADygDiIW6zm38BygDIWM8WyQHMlHAyygDiyQHMyQHMAFggbpUwcAHLAY4eINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8W4skBzABAAAAAAERlcGxveWVkIGEgZG9jdW1lbnQgY29udHJhY3QCljDTHwGCECSjZB+68uCB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiDGCAITf+EIoxwXy9PhBbyQTXwOIfwNwQwNtbds8f2l+ABQAAAAAY2FuY2VsBMaOxDDTHwGCEEtIYWW68uCB0//T/1kCINcLAcMAjh/6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIlHLXIW3iE2wT4CCCEAowoB+64wIgghBXnFfVuuMCIIIQlGqYtrprb3FzA9iBTZL4QirHBfL0UyHbPCBujtcgIG7y0ID4QW8kE18DRDTIVSCCEEtIYWVQBMsfWQLL/8v/ASBulTBwAcsBjh4g10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbiyRJ/A3BDA21t2zzjDX9sfm0ASoFdhiLC//L0gXt6AoED6LsS8vSBU8khwv/y9IEspAGBA+i78vQCLDAzM/hC+EFvJBNfA4h/A3BDA21t2zxufgBUAAAAAFRoZSBBdXRvcHJvb2YgY29tbWlzc2lvbnMgd2VyZSB1cGRhdGVkAmww0x8BghAKMKAfuvLggfoAATGCAPDu+EIoxwXy9IEflvgnbxAivPL0+EKIEn8DcEMDbW3bPH9wfgA2AAAAAFNlbmQgZnVuZHMgdG8gdGhlIG93bmVyAqAw0x8BghBXnFfVuvLggSDXCwHDAI4f+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiJRy1yFt4jExgXl1+EInxwXy9Ij4QgF/bds8f3J9AGYAAAAAVGhlIG5leHQgQXV0b3Byb29mIGNvbnRyYWN0IGFkZHJlc3Mgd2FzIHVwZGF0ZWQCZI6oMNMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8n4QgFwbds8f+DAAJEw4w1wfXQCtPkBIILwbI9E9F/ttM3+1N6NsUqlsTrVXUMPdZ0GaSELdMSP49+6joYw2zx/2zHggvC8+vd2kHxxnMjTedjxlKqqJ+jKKHHNWReBch8hWkVFAbqOhds8f9sx4HV4BBDbPNs8NHCIFXl2d3wADoIA0DAl8vQAFgAAAABSZXN1bWVkBBDbPNs8NH+IFXl6e3wAEvhCUmDHBfLghAAQggCdsCWz8vQAFgAAAABTdG9wcGVkAQ74QgF/bds8fQE6bW0ibrOZWyBu8tCAbyIBkTLiECRwAwSAQlAj2zx+AcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AH8AmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwA0Mj4QwHMfwHKAFVQUGUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxYTygDL/8hABALL/8v/ASBulTBwAcsBjh4g10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbiyQHMye1UAgEggo0CASCDiwIBIISJAgEghYcCEbEpts82zxsYYJOGAAIhAhGypjbPNs8bGGCTiAACIgIRtC97Z5tnjYwwk4oAAiQCEbhR3bPNs8bGGJOMAAIlAgEgjpACPbl4TbPNs8bGEgbpIwbZkgbvLQgG8ibwLiIG6SMG3eiTjwAIUyFvAgIBIJGSABG0V92omhpAADACEbeCO2ebZ42MMJOWAfTtRNDUAfhj0gABjmT6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdIA0//UAdDT/9P/WQIg1wsBwwCOH/pAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IiUctchbeIxEDYQNRA0EmwW4DD4KNcLCoMJupQBCvLgids8lQAYcG34QnCAX3UQNUEEAAIjK9l10g==');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initAutoproof_init_args({ $$type: 'Autoproof_init_args' })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const Autoproof_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack underflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    13: { message: `Out of gas error` },
    32: { message: `Method ID not found` },
    34: { message: `Action is invalid or not supported` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    135: { message: `Code of a contract was not found` },
    136: { message: `Invalid address` },
    137: { message: `Masterchain support is not enabled for this contract` },
    3861: { message: `Only author of the claim can approve` },
    5175: { message: `Title hash can't be empty` },
    7765: { message: `Can't approve without a claim` },
    8086: { message: `Not enough funds` },
    11428: { message: `Royalty commission percentage can't be greater than 1000` },
    14555: { message: `Exclusive rights transfer is not available` },
    16940: { message: `Only the exclusive rights owner can set the price` },
    19061: { message: `Only exclusive rights owner can get funds` },
    19102: { message: `Transfer is in progress` },
    19201: { message: `Can't view documents if they are not sent` },
    19858: { message: `Only owner can set the commissions` },
    21449: { message: `Royalty commission percentage can't be less than 0` },
    21953: { message: `Not enough funds.` },
    23073: { message: `Can't approve if documents are not viewed` },
    23942: { message: `Transfership commission percentage can't be less than 0` },
    30316: { message: `Can't approve if documents are not sent` },
    31093: { message: `Only owner can set the next autoproof address` },
    31610: { message: `Transfership commission percentage can't be greater than 1000` },
    34015: { message: `Only owner can cancel a document contract` },
    40125: { message: `Author's address can't be empty` },
    40368: { message: `Contract stopped` },
    41504: { message: `Can't update without a claim` },
    44565: { message: `Only the exclusive rights have access` },
    45720: { message: `Can't reject if documents were sent but not viewed` },
    48939: { message: `Only parent contract can set the commissions` },
    53084: { message: `Author's name can't be empty` },
    53296: { message: `Contract not stopped` },
    59193: { message: `Only exclusive rights owner or author of the claim can reject` },
    59485: { message: `Can't reject without a claim` },
    61064: { message: `Data can't be empty` },
    61678: { message: `Only owner can get funds` },
    61716: { message: `Only the author of the claim have access` },
    62718: { message: `RootHash hash can't be empty` },
}

const Autoproof_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"ChangeOwner","header":2174598809,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ChangeOwnerOk","header":846932810,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ExclusiveRightsClaim","header":null,"fields":[{"name":"author","type":{"kind":"simple","type":"address","optional":false}},{"name":"authorDetails","type":{"kind":"simple","type":"PersonDetails","optional":false}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"sentDocuments","type":{"kind":"simple","type":"bool","optional":false}},{"name":"viewedDocuments","type":{"kind":"simple","type":"bool","optional":false}}]},
    {"name":"SetPrice","header":1092820085,"fields":[{"name":"price","type":{"kind":"simple","type":"uint","optional":true,"format":"coins"}}]},
    {"name":"ClaimRequest","header":3578439401,"fields":[{"name":"authorDetails","type":{"kind":"simple","type":"PersonDetails","optional":false}}]},
    {"name":"ClaimApproval","header":774961926,"fields":[{"name":"assignmentHash","type":{"kind":"simple","type":"string","optional":false}}]},
    {"name":"Document$Data","header":null,"fields":[{"name":"parent","type":{"kind":"simple","type":"address","optional":false}},{"name":"seqno","type":{"kind":"simple","type":"uint","optional":false,"format":256}},{"name":"commissions","type":{"kind":"simple","type":"Commissions","optional":false}},{"name":"author","type":{"kind":"simple","type":"address","optional":false}},{"name":"exclusiveRightsOwner","type":{"kind":"simple","type":"address","optional":false}},{"name":"exclusiveRightsOwnerDetails","type":{"kind":"simple","type":"PersonDetails","optional":false}},{"name":"document","type":{"kind":"simple","type":"DocumentData","optional":false}},{"name":"price","type":{"kind":"simple","type":"uint","optional":true,"format":"coins"}},{"name":"currentClaim","type":{"kind":"simple","type":"ExclusiveRightsClaim","optional":true}},{"name":"assignmentHash","type":{"kind":"simple","type":"string","optional":true}},{"name":"royaltyWalletAddress","type":{"kind":"simple","type":"address","optional":true}}]},
    {"name":"PersonDetails","header":null,"fields":[{"name":"name","type":{"kind":"simple","type":"string","optional":false}},{"name":"address","type":{"kind":"simple","type":"string","optional":false}}]},
    {"name":"DocumentData","header":null,"fields":[{"name":"author","type":{"kind":"simple","type":"PersonDetails","optional":false}},{"name":"title","type":{"kind":"simple","type":"string","optional":false}},{"name":"rootHash","type":{"kind":"simple","type":"string","optional":false}},{"name":"data","type":{"kind":"simple","type":"string","optional":false}},{"name":"tags","type":{"kind":"simple","type":"string","optional":true}},{"name":"description","type":{"kind":"simple","type":"string","optional":true}}]},
    {"name":"GetFunds","header":170958879,"fields":[{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"SetCommissions","header":1263034725,"fields":[{"name":"commissions","type":{"kind":"simple","type":"Commissions","optional":false}},{"name":"documentAddress","type":{"kind":"simple","type":"address","optional":true}}]},
    {"name":"Commissions","header":null,"fields":[{"name":"transfershipCommissionPercentage","type":{"kind":"simple","type":"uint","optional":false,"format":256}},{"name":"royaltyCommissionPercentage","type":{"kind":"simple","type":"uint","optional":false,"format":256}}]},
    {"name":"DeclareDocument","header":1261895496,"fields":[{"name":"document","type":{"kind":"simple","type":"DocumentData","optional":false}},{"name":"royaltyWalletAddress","type":{"kind":"simple","type":"address","optional":true}}]},
    {"name":"CancelDocumentClaim","header":614687775,"fields":[{"name":"documentAddress","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"SetTheNextAutoproof","header":1469863893,"fields":[{"name":"contractAddress","type":{"kind":"simple","type":"address","optional":true}}]},
    {"name":"Autoproof$Data","header":null,"fields":[{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"stopped","type":{"kind":"simple","type":"bool","optional":false}},{"name":"documentsNumber","type":{"kind":"simple","type":"uint","optional":false,"format":256}},{"name":"commissions","type":{"kind":"simple","type":"Commissions","optional":false}},{"name":"nextAutoproofAddress","type":{"kind":"simple","type":"address","optional":true}}]},
]

const Autoproof_getters: ABIGetter[] = [
    {"name":"documentsNumber","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"currentCommissions","arguments":[],"returnType":{"kind":"simple","type":"Commissions","optional":true}},
    {"name":"currentTransfershipCommissionPercentage","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"currentRoyaltyCommissionPercentage","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"stopped","arguments":[],"returnType":{"kind":"simple","type":"bool","optional":false}},
    {"name":"owner","arguments":[],"returnType":{"kind":"simple","type":"address","optional":false}},
]

export const Autoproof_getterMapping: { [key: string]: string } = {
    'documentsNumber': 'getDocumentsNumber',
    'currentCommissions': 'getCurrentCommissions',
    'currentTransfershipCommissionPercentage': 'getCurrentTransfershipCommissionPercentage',
    'currentRoyaltyCommissionPercentage': 'getCurrentRoyaltyCommissionPercentage',
    'stopped': 'getStopped',
    'owner': 'getOwner',
}

const Autoproof_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"DeclareDocument"}},
    {"receiver":"internal","message":{"kind":"typed","type":"CancelDocumentClaim"}},
    {"receiver":"internal","message":{"kind":"typed","type":"SetCommissions"}},
    {"receiver":"internal","message":{"kind":"typed","type":"GetFunds"}},
    {"receiver":"internal","message":{"kind":"typed","type":"SetTheNextAutoproof"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
    {"receiver":"internal","message":{"kind":"text","text":"Resume"}},
    {"receiver":"internal","message":{"kind":"text","text":"Stop"}},
]

export class Autoproof implements Contract {
    
    static async init() {
        return await Autoproof_init();
    }
    
    static async fromInit() {
        const init = await Autoproof_init();
        const address = contractAddress(0, init);
        return new Autoproof(address, init);
    }
    
    static fromAddress(address: Address) {
        return new Autoproof(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  Autoproof_types,
        getters: Autoproof_getters,
        receivers: Autoproof_receivers,
        errors: Autoproof_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: DeclareDocument | CancelDocumentClaim | SetCommissions | GetFunds | SetTheNextAutoproof | Deploy | 'Resume' | 'Stop') {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'DeclareDocument') {
            body = beginCell().store(storeDeclareDocument(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'CancelDocumentClaim') {
            body = beginCell().store(storeCancelDocumentClaim(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'SetCommissions') {
            body = beginCell().store(storeSetCommissions(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'GetFunds') {
            body = beginCell().store(storeGetFunds(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'SetTheNextAutoproof') {
            body = beginCell().store(storeSetTheNextAutoproof(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (message === 'Resume') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message === 'Stop') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getDocumentsNumber(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('documentsNumber', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getCurrentCommissions(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('currentCommissions', builder.build())).stack;
        const result_p = source.readTupleOpt();
        const result = result_p ? loadTupleCommissions(result_p) : null;
        return result;
    }
    
    async getCurrentTransfershipCommissionPercentage(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('currentTransfershipCommissionPercentage', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getCurrentRoyaltyCommissionPercentage(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('currentRoyaltyCommissionPercentage', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getStopped(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('stopped', builder.build())).stack;
        let result = source.readBoolean();
        return result;
    }
    
    async getOwner(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('owner', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
}