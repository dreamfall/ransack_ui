require "ransack_ui/version"
require "ransack_ui/rails/engine"

# Require ransack overrides
Dir.glob(File.expand_path('../ransack_ui/ransack_overrides/**/*.rb', __FILE__)) {|f| require f }
