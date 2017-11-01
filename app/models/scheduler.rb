class Scheduler

  #applies the next inter-repetition interval to the card and updates its easiness factor
  #difficulty is an integer 0-5
  #time_studied is a DateTime
  def self.schedule(card, difficulty)
    #reset card if too hard w/p changing easiness factor
    #handling this first case on front end for now
    if difficulty < 3
      card.repetition = 0
      card.save
    else
      #find new easiness factor
      e_factor = calc_e_factor(card.e_factor, difficulty)
      interval = calc_interval(e_factor, card.repetition)

      card.next_due += 1.days
      card.e_factor = e_factor
      card.save
    end
  end

  #calculates the next inter-repetition interval in days given n repetitions
  def self.calc_interval(e_factor, n)
    return 1 if n == 1
    return 6 if n == 2

    return calc_interval(e_factor, n-1) * e_factor
  end
  
  #calculates the new easiness factor
  def self.calc_e_factor(old_factor, difficulty)
    ef = old_factor + (0.1 - (5 - difficulty) * (0.08 + (5 - difficulty) * 0.02))

    ef < 1.3 ? 1.3 : ef
  end

end