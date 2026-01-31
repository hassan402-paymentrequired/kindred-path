 <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-72 h-[580px] bg-card rounded-[3rem] border-4 border-muted shadow-elevated overflow-hidden">
                {/* Phone Screen - Placeholder */}
                <div className="absolute inset-2 rounded-[2.5rem] bg-gradient-to-b from-muted to-card overflow-hidden">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-6 py-3 text-xs text-muted-foreground">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-muted-foreground/50 rounded-sm" />
                      <div className="w-4 h-2 bg-muted-foreground/50 rounded-sm" />
                      <div className="w-6 h-3 bg-success rounded-sm" />
                    </div>
                  </div>
                  
                  {/* App Content Placeholder */}
                  <div className="p-4 space-y-4">
                    <div className="text-lg font-semibold text-foreground">Howdy, Fellow! 👋</div>
                    
                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-3 bg-primary/20 rounded-2xl">
                        <div className="text-2xl font-bold text-primary">86%</div>
                        <div className="text-xs text-muted-foreground">Mood Score</div>
                      </div>
                      <div className="p-3 bg-success/20 rounded-2xl">
                        <div className="text-2xl font-bold text-success">12</div>
                        <div className="text-xs text-muted-foreground">Day Streak</div>
                      </div>
                    </div>

                    {/* Activity Graph Placeholder */}
                    <div className="p-4 bg-muted/50 rounded-2xl">
                      <div className="text-sm font-medium mb-3">Weekly Activity</div>
                      <div className="flex items-end gap-2 h-20">
                        {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                          <div 
                            key={i} 
                            className="flex-1 bg-primary/60 rounded-t-lg transition-all hover:bg-primary"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                      <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                          <span key={i}>{d}</span>
                        ))}
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="flex gap-2">
                      <div className="flex-1 p-3 bg-success/20 rounded-xl text-center">
                        <div className="text-2xl mb-1">🧘</div>
                        <div className="text-xs">Meditate</div>
                      </div>
                      <div className="flex-1 p-3 bg-accent/20 rounded-xl text-center">
                        <div className="text-2xl mb-1">📝</div>
                        <div className="text-xs">Journal</div>
                      </div>
                      <div className="flex-1 p-3 bg-secondary/20 rounded-xl text-center">
                        <div className="text-2xl mb-1">💪</div>
                        <div className="text-xs">Workout</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="float-element absolute -top-4 -right-8 p-3 bg-card rounded-2xl border border-border shadow-elevated">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center text-lg">🎯</div>
                  <div>
                    <div className="text-sm font-semibold">Goals Met</div>
                    <div className="text-xs text-muted-foreground">5/5 today</div>
                  </div>
                </div>
              </div>

              <div className="float-element absolute -bottom-6 -left-12 p-3 bg-card rounded-2xl border border-border shadow-elevated">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-love/20 rounded-full flex items-center justify-center text-lg">❤️</div>
                  <div>
                    <div className="text-sm font-semibold text-love">+23%</div>
                    <div className="text-xs text-muted-foreground">Happiness</div>
                  </div>
                </div>
              </div>
            </div>