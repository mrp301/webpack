Rails.application.routes.draw do
  get 'todo' => 'todo#index'
  get 'todo/:id' => 'todo#index'
end
