pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Running Build Step...'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running Tests...'
                // Simulate a test step (replace with real tests later)
                sh 'echo "Tests passed!"'
            }
        }

        stage('Deploy to Staging') {
            steps {
                echo 'Deploying to Staging...'
                sh 'echo "Staging deployment done."'
            }
        }

        stage('Deploy to Production') {
            steps {
                input message: "Deploy to Production?", ok: "Yes, Deploy"
                echo 'Deploying to Production...'
                sh 'echo "Production deployment done."'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed. Check logs for details.'
        }
    }
}
