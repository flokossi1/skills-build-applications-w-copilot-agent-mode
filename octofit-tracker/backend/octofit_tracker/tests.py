from django.test import TestCase
from .models import Team, User, Activity, Workout, Leaderboard

class ModelSmokeTest(TestCase):
    def test_team_create(self):
        t = Team.objects.create(name='Test Team')
        self.assertEqual(str(t), 'Test Team')

    def test_user_create(self):
        team = Team.objects.create(name='Test Team')
        u = User.objects.create_user(username='test', email='test@test.com', password='pw', team=team)
        self.assertEqual(u.email, 'test@test.com')

    def test_activity_create(self):
        team = Team.objects.create(name='Test Team')
        u = User.objects.create_user(username='test', email='test@test.com', password='pw', team=team)
        a = Activity.objects.create(user=u, type='run', duration=10, distance=2.5)
        self.assertEqual(a.type, 'run')

    def test_workout_create(self):
        w = Workout.objects.create(name='WOD', description='desc')
        self.assertEqual(w.name, 'WOD')

    def test_leaderboard_create(self):
        team = Team.objects.create(name='Test Team')
        u = User.objects.create_user(username='test', email='test@test.com', password='pw', team=team)
        l = Leaderboard.objects.create(user=u, points=42)
        self.assertEqual(l.points, 42)
