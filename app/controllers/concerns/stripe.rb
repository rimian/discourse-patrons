# frozen_string_literal: true

module DiscourseSubscriptions
  module Stripe
    extend ActiveSupport::Concern

    AUTH_PROBLEM_IDENTIFIER = "#{DiscourseSubscriptions::PLUGIN_NAME}.stripe_auth_error"

    def set_api_key
      ::Stripe.api_key = SiteSetting.discourse_subscriptions_secret_key
    end

    def is_stripe_configured?
      SiteSetting.discourse_subscriptions_public_key.present? &&
        SiteSetting.discourse_subscriptions_secret_key.present?
    end
  end
end
