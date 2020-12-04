Rails.application.routes.draw do
  resources :hello, only: [:index]
  resources :org, only: [:index]
  resources :manufacturer, only: [:index]
end
