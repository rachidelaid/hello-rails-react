class Api::MessagesController < ApplicationController
  def index
    msg = Message.all()
    render json: {message: msg.sample.message}
  end
end 