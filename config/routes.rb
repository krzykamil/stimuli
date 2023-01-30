Rails.application.routes.draw do
  root "playgrounds#index"

  resource :playgrounds, only: [:index, :show], param: :showcase
end
