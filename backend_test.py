#!/usr/bin/env python3

import requests
import sys
from datetime import datetime
import json

class RACKAPITester:
    def __init__(self, base_url="https://fashion-partner-3.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def log_test(self, name, success, details=""):
        """Log test result"""
        self.tests_run += 1
        if success:
            self.tests_passed += 1
            print(f"✅ {name} - PASSED")
        else:
            print(f"❌ {name} - FAILED: {details}")
        
        self.test_results.append({
            "test": name,
            "success": success,
            "details": details
        })

    def test_health_endpoint(self):
        """Test health check endpoint"""
        try:
            response = requests.get(f"{self.api_url}/health", timeout=10)
            success = response.status_code == 200
            details = f"Status: {response.status_code}"
            if success:
                data = response.json()
                details += f", Response: {data}"
            self.log_test("Health Check", success, details)
            return success
        except Exception as e:
            self.log_test("Health Check", False, str(e))
            return False

    def test_root_endpoint(self):
        """Test root API endpoint"""
        try:
            response = requests.get(f"{self.api_url}/", timeout=10)
            success = response.status_code == 200
            details = f"Status: {response.status_code}"
            if success:
                data = response.json()
                details += f", Response: {data}"
            self.log_test("Root API", success, details)
            return success
        except Exception as e:
            self.log_test("Root API", False, str(e))
            return False

    def test_waitlist_signup(self):
        """Test waitlist signup functionality"""
        test_email = f"test_{datetime.now().strftime('%Y%m%d_%H%M%S')}@example.com"
        
        try:
            # Test valid email signup
            response = requests.post(
                f"{self.api_url}/waitlist",
                json={"email": test_email, "source": "test"},
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            success = response.status_code == 200
            details = f"Status: {response.status_code}"
            
            if success:
                data = response.json()
                details += f", Response: {data}"
                # Check if response has expected structure
                if not (data.get("success") and data.get("message")):
                    success = False
                    details += " - Missing success/message fields"
            
            self.log_test("Waitlist Signup", success, details)
            return success
            
        except Exception as e:
            self.log_test("Waitlist Signup", False, str(e))
            return False

    def test_waitlist_duplicate(self):
        """Test duplicate email handling"""
        test_email = f"duplicate_{datetime.now().strftime('%Y%m%d_%H%M%S')}@example.com"
        
        try:
            # First signup
            requests.post(
                f"{self.api_url}/waitlist",
                json={"email": test_email},
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            # Second signup (duplicate)
            response = requests.post(
                f"{self.api_url}/waitlist",
                json={"email": test_email},
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            success = response.status_code == 200
            details = f"Status: {response.status_code}"
            
            if success:
                data = response.json()
                details += f", Response: {data}"
                # Should still return success for duplicate
                if not data.get("success"):
                    success = False
                    details += " - Should handle duplicates gracefully"
            
            self.log_test("Waitlist Duplicate Handling", success, details)
            return success
            
        except Exception as e:
            self.log_test("Waitlist Duplicate Handling", False, str(e))
            return False

    def test_waitlist_invalid_email(self):
        """Test invalid email validation"""
        try:
            response = requests.post(
                f"{self.api_url}/waitlist",
                json={"email": "invalid-email"},
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            # Should return 422 for validation error
            success = response.status_code == 422
            details = f"Status: {response.status_code} (expected 422 for invalid email)"
            
            self.log_test("Waitlist Email Validation", success, details)
            return success
            
        except Exception as e:
            self.log_test("Waitlist Email Validation", False, str(e))
            return False

    def test_waitlist_count(self):
        """Test waitlist count endpoint"""
        try:
            response = requests.get(f"{self.api_url}/waitlist/count", timeout=10)
            success = response.status_code == 200
            details = f"Status: {response.status_code}"
            
            if success:
                data = response.json()
                details += f", Count: {data.get('count', 'N/A')}"
                # Check if count is a number
                if not isinstance(data.get("count"), int):
                    success = False
                    details += " - Count should be integer"
            
            self.log_test("Waitlist Count", success, details)
            return success
            
        except Exception as e:
            self.log_test("Waitlist Count", False, str(e))
            return False

    def test_contact_form(self):
        """Test contact form submission"""
        test_data = {
            "name": "Test User",
            "email": f"test_{datetime.now().strftime('%Y%m%d_%H%M%S')}@example.com",
            "subject": "Test Subject",
            "message": "This is a test message",
            "message_type": "general"
        }
        
        try:
            response = requests.post(
                f"{self.api_url}/contact",
                json=test_data,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            success = response.status_code == 200
            details = f"Status: {response.status_code}"
            
            if success:
                data = response.json()
                details += f", Response: {data}"
                # Check if response has expected structure
                if not (data.get("success") and data.get("message")):
                    success = False
                    details += " - Missing success/message fields"
            
            self.log_test("Contact Form Submission", success, details)
            return success
            
        except Exception as e:
            self.log_test("Contact Form Submission", False, str(e))
            return False

    def test_contact_invalid_email(self):
        """Test contact form with invalid email"""
        test_data = {
            "name": "Test User",
            "email": "invalid-email",
            "subject": "Test Subject",
            "message": "This is a test message",
            "message_type": "general"
        }
        
        try:
            response = requests.post(
                f"{self.api_url}/contact",
                json=test_data,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            # Should return 422 for validation error
            success = response.status_code == 422
            details = f"Status: {response.status_code} (expected 422 for invalid email)"
            
            self.log_test("Contact Form Email Validation", success, details)
            return success
            
        except Exception as e:
            self.log_test("Contact Form Email Validation", False, str(e))
            return False

    def run_all_tests(self):
        """Run all API tests"""
        print(f"🚀 Starting RACK API Tests")
        print(f"📍 Testing endpoint: {self.api_url}")
        print("=" * 50)
        
        # Basic connectivity tests
        if not self.test_health_endpoint():
            print("❌ Health check failed - stopping tests")
            return False
            
        self.test_root_endpoint()
        
        # Waitlist tests
        self.test_waitlist_signup()
        self.test_waitlist_duplicate()
        self.test_waitlist_invalid_email()
        self.test_waitlist_count()
        
        # Contact form tests
        self.test_contact_form()
        self.test_contact_invalid_email()
        
        # Print summary
        print("=" * 50)
        print(f"📊 Test Results: {self.tests_passed}/{self.tests_run} passed")
        
        if self.tests_passed == self.tests_run:
            print("🎉 All tests passed!")
            return True
        else:
            print(f"⚠️  {self.tests_run - self.tests_passed} tests failed")
            return False

def main():
    tester = RACKAPITester()
    success = tester.run_all_tests()
    
    # Save detailed results
    results = {
        "timestamp": datetime.now().isoformat(),
        "total_tests": tester.tests_run,
        "passed_tests": tester.tests_passed,
        "success_rate": f"{(tester.tests_passed/tester.tests_run)*100:.1f}%" if tester.tests_run > 0 else "0%",
        "test_details": tester.test_results
    }
    
    with open("/app/backend_test_results.json", "w") as f:
        json.dump(results, f, indent=2)
    
    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main())