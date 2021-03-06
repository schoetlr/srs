class CardsController < ApplicationController


  def create
    @card = Card.new(card_params)
    @card.user_id = current_user.id

    if @card.save
      @card.next_due = @card.created_at
      @card.save

      respond_to do |format|
        format.json { render json: @card }
      end
    else
      respond_to do |format|
        format.json {}
      end

    end

  end


  def update
    if params[:study]
      @card = Card.find(params[:id])
      difficulty = params[:difficulty].to_i

      @card.repetition += 1
      #apply the scheduling algorithm
      Scheduler.schedule(@card, difficulty)
      
      respond_to do |format|
        format.json { render json: @card }
      end
    else

      if @card.update(card_params)
        respond_to do |format|
          format.json { render json: @card }
        end
      else
        respond_to do |format|
          format.json {}
        end
      end

    end
  end

  def destroy
    @card = Card.find(params[:id])

    @card.destroy

    respond_to do |format|
      format.json { render json: @card }
    end

  end



  private

  def card_params
    params.require(:card).permit(:back, :front,
                                 :cloze, :deck_id)
  end
end
