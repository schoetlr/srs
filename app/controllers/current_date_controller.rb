class CurrentDateController < ApplicationController

  def index
    current_day = Date.today.in_time_zone('Eastern Time (US & Canada)')
    response = [current_day]

    respond_to do |format|
      format.json { render json: response }
    end
  end

end
