class ManufacturerController < ApplicationController
  def index
    # render json: Manufacturer.select(:id, :name).map(&:to_select)
    render json: Manufacturer.all.map(&:to_datatable)
  end
end
