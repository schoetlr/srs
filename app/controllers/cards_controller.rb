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
    @card = Card.find(params[:id])

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
                                 :cloze, :next_due, 
                                 :deck_id, :user_id)
  end
end
