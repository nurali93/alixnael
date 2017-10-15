require_relative 'boot'

require 'rails/all'
Bundler.require(*Rails.groups)

module Alixnael
  class Application < Rails::Application
  end
end
