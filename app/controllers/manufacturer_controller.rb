class ManufacturerController < ApplicationController
  def index
    render json: Manufacturer.select(:id, :name).map(&:to_select)
  end
end
