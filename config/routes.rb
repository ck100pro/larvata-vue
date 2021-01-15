Rails.application.routes.draw do
  # resources :company, only: [:index, :show]
  # resources :talk, only: [:index]
  get '/*path', to: 'company#index'

  namespace :api do
    resources :org, only: [] do
      get :to_select, on: :collection
    end
    resources :manufacturer, only: [:show] do
      collection do
        get :to_select
        get :datatables
      end
    end
  end
end
