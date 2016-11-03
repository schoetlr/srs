class CurrentTimeController < ApplicationController

  def index
    current_time = DateTime.now

    respond_to do |format|
      format.json { render json: current_time }
    end
  end

end
