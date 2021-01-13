Rails.application.routes.draw do
  resources :hello, only: [:index]
  resources :org, only: [:index]
  resources :manufacturer, only: [:index]

  namespace :api do
    resources :org, only: [] do
      get :to_select, on: :collection
    end
    resources :manufacturer, only: [] do
      collection do
        get :to_select
        get :datatables
      end
    end
  end
end
