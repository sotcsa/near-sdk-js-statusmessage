import {
  call,
  near,
  NearBindgen,
  NearContract,
  UnorderedMap,
  view,
} from "near-sdk-js";


@NearBindgen
class StatusMessage extends NearContract {
  records: UnorderedMap;

  constructor() {
    super();
    this.records = new UnorderedMap("r");
  }

  default() {
    return new StatusMessage();
  }

  @view
  get_message({ accountId }) {
    near.log(`get message for ${accountId}`);
    return this.records.get(accountId);
  }

  @call
  set_message({ message }) {
    let accountId = near.signerAccountId();
    near.log(`Set message ${message} for ${accountId} `);
    this.records.set(accountId, message);
  }
}
