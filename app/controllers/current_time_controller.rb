class CurrentTimeController < ApplicationController

  def current_time
    current_time = DateTime.now

    respond_to do |format|
      format.json { render json: current_time }
    end
  end
  
end
