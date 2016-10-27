class CardsController < ApplicationController


  def create
    @card = Card.new(card_params)

    if @card.save
      respond_to do |format|
        format.json { render json: @card }
      end
    else
      respond_to do |format|
        format.json {}
      end

    end

  end



  private

  def card_params
    params.require(:card).permit(:back, :front,
                                 :cloze, :next_due, 
                                 :deck_id, :user_id)
  end
end
