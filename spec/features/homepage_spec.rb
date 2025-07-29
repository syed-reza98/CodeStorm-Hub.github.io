require_relative '../spec_helper'

RSpec.describe 'Homepage', type: :feature do
  before(:each) do
    visit '/'
  end

  it 'loads successfully' do
    expect(page.status_code).to eq(200)
  end

  it 'displays the correct title' do
    expect(page).to have_title('CodeStorm Hub')
  end

  it 'has the main hero section' do
    expect(page).to have_selector('.hero')
    expect(page).to have_content('Transform Your Business')
  end

  it 'has working navigation' do
    expect(page).to have_selector('.navbar')
    expect(page).to have_link('Home')
    expect(page).to have_link('About')
    expect(page).to have_link('Services')
    expect(page).to have_link('Portfolio')
    expect(page).to have_link('Contact')
  end

  it 'has call-to-action buttons' do
    expect(page).to have_link('Start Your Project')
    expect(page).to have_link('View Our Work')
  end

  it 'has accessibility features' do
    expect(page).to have_selector('a.skip-link', visible: false)
    expect(page).to have_selector('[role="main"]')
  end
end

RSpec.describe 'Navigation', type: :feature do
  it 'can navigate to about page' do
    visit '/'
    click_link 'About'
    expect(page).to have_current_path('/about/')
    expect(page).to have_content('About')
  end

  it 'can navigate to contact page' do
    visit '/'
    click_link 'Contact'
    expect(page).to have_current_path('/contact/')
    expect(page).to have_content('Contact')
  end

  it 'can navigate to portfolio page' do
    visit '/'
    click_link 'Portfolio'
    expect(page).to have_current_path('/portfolio/')
    expect(page).to have_content('Portfolio')
  end
end