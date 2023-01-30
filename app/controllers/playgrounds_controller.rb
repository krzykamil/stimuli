class PlaygroundsController < ApplicationController

  def index
    render "playgrounds/index"
  end

  def show
    case params[:showcase]
      when 'clipboard' then 'playgrounds/clipboard'
      when 'counter' then 'playgrounds/counter'
      when 'checklist' then 'playgrounds/checklist'
    end
  end
end
