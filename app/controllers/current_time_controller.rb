class CurrentTimeController < ApplicationController

  def index
    current_time = DateTime.now.in_time_zone('Eastern Time (US & Canada)')
    response = [current_time]

    respond_to do |format|
      format.json { render json: response }
    end
  end

end
