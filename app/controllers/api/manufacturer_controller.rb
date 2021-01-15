class Api::ManufacturerController < ApplicationController

  def show
    
  end

  def to_select
    render json: Manufacturer.select(:id, :name).map(&:to_select)
  end

  def datatables
    length = params[:length]
    start = params[:start]
    manufacturers_count = Manufacturer.count
    manufacturers = Manufacturer.offset(start).limit(length).map(&:to_datatable)

    render json: { count: manufacturers_count, data: manufacturers }
  end

end
