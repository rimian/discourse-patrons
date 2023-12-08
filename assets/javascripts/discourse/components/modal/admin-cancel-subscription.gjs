import DButton from "discourse/components/d-button";
import DModal from "discourse/components/d-modal";
import Component from "@glimmer/component";
import { fn, hash } from "@ember/helper";
import i18n from "discourse-common/helpers/i18n";
import { Input } from "@ember/component";
import { tracked } from "@glimmer/tracking";

export default class AdminCancelSubscription extends Component {
  @tracked refund;

  <template>
    <DModal
      @title={{i18n
        "discourse_subscriptions.user.subscriptions.operations.destroy.confirm"
      }}
      @closeModal={{@closeModal}}
    >
      <:body>
        <Input @type="checkbox" @checked={{this.refund}} />
        {{i18n "discourse_subscriptions.admin.ask_refund"}}
      </:body>
      <:footer>
        <DButton
          @label="yes_value"
          @action={{fn
            @model.cancelSubscription
            (hash subscription=@model.subscription refund=this.refund)
          }}
          @icon="times"
          @isLoading={{@model.subscription.loading}}
          class="btn-danger"
        />
        <DButton @label="no_value" @action={{@closeModal}} />
      </:footer>
    </DModal>
  </template>
}
