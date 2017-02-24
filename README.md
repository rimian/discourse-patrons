# Discourse Donations

[![Build Status](https://travis-ci.org/choiceaustralia/discourse-donations.svg?branch=master)](https://travis-ci.org/choiceaustralia/discourse-donations)

Accept donations in Discourse! Integrates with [Stripe](https://stripe.com).

## Configuration

You can either set your environment vars in docker or save them in a yaml.

In your `app.yml`:

```
  STRIPE_SECRET_KEY: 'sk_test_key'
  STRIPE_PUBLISHABLE_KEY: 'pk_test_key'
```

## TODO

* Remove hard coded key and use settings.
* Add a plugin outlet for custom user fields.
* Some tests
* Handle fails from stripe
* A button in the user's profile page.

**In your app.yml**

```
STRIPE_SECRET_KEY: 'my_secret_key'
STRIPE_PUBLISHABLE_KEY: 'my_publishable_key'
```

## Testing

To run the rails specs, install the plugin and run `bundle exec rake plugin:spec[discourse-payments]` in the discourse root directory.

To run qunit tests: `MODULE='Acceptance: Discourse Payments' rake qunit:test[20000]`.

**Note:**

* [This fix](https://github.com/discourse/discourse/pull/4719) is required to run qunit test modules.
* If you're using a zsh shell, then you probably get this error: `zsh: no matches found ...` and you'll need to escape the square brackets with backslashes.
