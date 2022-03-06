import { module, test } from "qunit";
import Plan from "discourse/plugins/discourse-subscriptions/discourse/models/plan";

module("discourse-patrons:model:plan", function () {
  test("subscriptionRate", (assert) => {
    const plan = Plan.create({
      unit_amount: "2399",
      currency: "aud",
      recurring: {
        interval: "month",
      },
    });

    assert.strictEqual(
      plan.get("subscriptionRate"),
      "23.99 AUD / month",
      "it returns the formatted subscription rate"
    );
  });

  test("amountDollars", (assert) => {
    const plan = Plan.create({ unit_amount: 2399 });

    assert.strictEqual(
      plan.get("amountDollars"),
      23.99,
      "it returns the formatted dollar amount"
    );
  });

  test("amount", (assert) => {
    const plan = Plan.create({ amountDollars: "22.12" });

    assert.strictEqual(
      plan.get("unit_amount"),
      2212,
      "it returns the cents amount"
    );
  });
});
