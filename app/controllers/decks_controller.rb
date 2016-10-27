class DecksController < ApplicationController


  def create
    @deck = Deck.new(deck_params)
    @deck.user_id = current_user.id

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

  def show
    @deck = Deck.find(params[:id])

    respond_to do |format|
      format.json { render json: @deck.to_json(include: :cards) }
    end
  end


  def update
    @deck = Deck.find(params[:id])

    if @deck.update(deck_params)
      respond_to do |format|
        format.json { render json: @deck.to_json(include: :cards) }
      end
    else
      respond_to do |format|
        format.json {}
      end

    end


  end

  def destroy
    @deck = Deck.find(params[:id])

    @deck.destroy


    respond_to do |format|
      format.json { render json: @deck }
    end

  end



  private

  def deck_params
    params.require(:deck).permit(:title)
  end
end
