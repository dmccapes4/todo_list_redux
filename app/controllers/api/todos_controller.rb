class Api::TodosController < ApplicationController
  def create
    # debugger
    @todo = Todo.new(todo_params)
    @todo.done = false
    if @todo.save
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def show
    render json: Todo.find(params[:id])
  end

  def update
    @todo = Todo.find(params[:id])

    if @todo.update_attributes(todo_params)
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def index
    @todos = Todo.all
    render json: @todos
  end

  def destroy
    @todo = Todo.find(params[:id])

    @todo.destroy
    redirect_to api_todos_url
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end
end
