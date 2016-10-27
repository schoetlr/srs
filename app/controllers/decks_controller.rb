class DecksController < ApplicationController


  def create
    @deck = Deck.new(deck_params)

    if @deck.save
      respond_to do |format|
        format.json { render json: @deck }
      end
    else
      respond_to do |format|
        format.json {}
      end

    end
  end

  def index
    @decks = current_user.decks

    respond_to do |format|
      format.json { render json: @decks.to_json(include: :cards) }

    end 

  end



  private

  def deck_params
    params.require(:deck).permit(:title)
  end
end
