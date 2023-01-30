Rails.application.routes.draw do
  root "playgrounds#index"

  resources :playgrounds, only: [:index, :show]
end
