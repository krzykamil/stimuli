class PlaygroundsController < ApplicationController

  def index
    render "playgrounds/index"
  end

  def show
    case params[:showcase]
    when 'clipboard' then render 'playgrounds/clipboard'
    when 'counter' then render 'playgrounds/counter'
    when 'checklist' then render 'playgrounds/checklist'
    when 'drawing' then render 'playgrounds/drawing'
    else "playgrounds/index"
    end
  end
end
