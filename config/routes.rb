Rails.application.routes.draw do
  root 'static_pages#index'

  scope :api do
    scope :v1 do
      resources :messages, only: [:index]
    end
  end

end
