Rails.application.routes.draw do
  namespace :api, defaults: { format: 'json' } do
    get "message", to: "messages#index" 
  end
  
  get "*page", to: "static#index", constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
  root "static#index"
end
