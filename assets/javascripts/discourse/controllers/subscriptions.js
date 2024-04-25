import Controller from "@ember/controller";
import { computed } from "@ember/object";
import { htmlSafe } from "@ember/template";
import I18n from "I18n";

export default Controller.extend({
  init() {
    this._super(...arguments);
    if (this.currentUser) {
      this.currentUser
        .checkEmail()
        .then(() => this.set("email", this.currentUser.email));
    }
  },
  pricingTable: computed("email", function () {
    try {
      const pricing_table_info = JSON.parse(
        this.siteSettings.discourse_subscriptions_pricing_table
      );
      if (this.currentUser) {
        return htmlSafe(`<stripe-pricing-table
                pricing-table-id="${pricing_table_info.pricingTableId}"
                publishable-key="${pricing_table_info.publishableKey}"
                customer-email="${this.email}"></stripe-pricing-table>`);
      } else {
        return htmlSafe(`<stripe-pricing-table
                pricing-table-id="${pricing_table_info.pricingTableId}"
                publishable-key="${pricing_table_info.publishableKey}"
                ></stripe-pricing-table>`);
      }
    } catch (error) {
      return I18n.t("discourse_subscriptions.subscribe.no_products");
    }
  }),
});
