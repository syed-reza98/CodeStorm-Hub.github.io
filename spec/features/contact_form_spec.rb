require_relative '../spec_helper'

RSpec.describe 'Contact Form', type: :feature, js: true do
  before(:each) do
    visit '/contact/'
  end

  it 'displays the contact form' do
    expect(page).to have_selector('#contact-form')
    expect(page).to have_field('name')
    expect(page).to have_field('email')
    expect(page).to have_field('subject')
    expect(page).to have_field('message')
    expect(page).to have_button('Send Message')
  end

  it 'validates required fields' do
    click_button 'Send Message'
    
    # Check for validation messages
    expect(page).to have_selector('.error-message', count: 4)
  end

  it 'validates email format' do
    fill_in 'name', with: 'Test User'
    fill_in 'email', with: 'invalid-email'
    fill_in 'subject', with: 'Test Subject'
    fill_in 'message', with: 'Test message'
    
    click_button 'Send Message'
    
    expect(page).to have_selector('.error-message', text: /email/i)
  end

  it 'shows success message on valid submission' do
    fill_in 'name', with: 'Test User'
    fill_in 'email', with: 'test@example.com'
    fill_in 'subject', with: 'Test Subject'
    fill_in 'message', with: 'This is a test message with sufficient length to pass validation.'
    
    click_button 'Send Message'
    
    expect(page).to have_selector('.success-message', wait: 10)
  end

  it 'has proper ARIA labels and accessibility' do
    expect(page).to have_field('name', type: 'text')
    expect(page).to have_field('email', type: 'email')
    
    # Check for ARIA attributes
    expect(page).to have_selector('[aria-required="true"]', count: 4)
  end
end